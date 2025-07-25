import bcrypt from "bcryptjs"
import {db} from "../libs/db.js"
import { UserRole } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken"

export const googleCallback = async (req, res) => {
  try {
    const googleUser = req.user;

    let user = await db.user.findUnique({
      where: { email: googleUser.email },
    });

    if (!user) {
      user = await db.user.create({
        data: {
          name: googleUser.name,
          email: googleUser.email,
          image: googleUser.avatar,
          role: UserRole.USER,
          password: "",
        },
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    res.header("Access-Control-Allow-Credentials", "true");


    res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "None",
    maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.send(`
        <html>
            <script>
            window.opener.postMessage({ type: "oauth-success" }, "${process.env.FRONTEND_URL}");
            window.close();
            </script>
        </html>
    `);

  } catch (err) {
    console.error("Google login error", err);
    res.redirect(`${process.env.FRONTEND_URL}/login?error=google_failed`);
  }
  
};

// syncAuth.js (or inside controller)
export const syncAuth = (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }
  return res.status(200).json({ message: "Cookie synced" });
};


export const register = async (req, res) => {
    const {email, password, name} = req.body;

    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
    console.log(`Name: ${name}`)

    try {
        const exsistingUser = await db.user.findUnique({
            where: {
                email: email
            }
        })

        console.log(`Exsisting user: ${exsistingUser}`)

        if (exsistingUser) {
            return res.status(400).json({
                error: "User already exsists"
            })
        }

        const hashedPassowrd = await bcrypt.hash(password, 10);

        console.log(`hashed Passoword: ${hashedPassowrd}`)

        const newUser = await db.user.create({
            data: {
                email, 
                password: hashedPassowrd, 
                name,
                role: UserRole.USER
            }
        })

        const token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET, {
            expiresIn: "7d"
        })

        res.cookie("jwt", token, {
            httpOnly: true,
            sameSite: "None",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 1000*60*60*24*7
        })

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                role: newUser.role,
                image: newUser.image
            }
        })
    } catch (error) {
        console.log(`error in registering user: ${error}`)
    }
}

export const login = async (req, res) => {
    // take email and pwd
    // compare 

    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(401).json({
            message: "Enter all credentials"
        })
    }

    try {
        // now I need to find a user with email 
        const currentUser = await db.user.findUnique({
            where: {
                email
            }
        })

        if (!currentUser) {
            return res.status(401).json({
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, currentUser.password)

        if (!isMatch) {
            return res.status(401).json({
                error: "Invalied credentials"
            })
        }
        
        // set session 
        const token = jwt.sign({ id: currentUser.id }, process.env.JWT_SECRET, {expiresIn: "7d"})

        res.cookie("jwt", token, {
            httpOnly: true,
            sameSite: "None",
            secure: process.env.NODE_ENV !== "development",
            maxAge: 1000*60*60*24*7
        })


        res.status(200).json({
            message: "User loggedin successfully",
            user: {
                id: currentUser.id,
                email: currentUser.email,
                name: currentUser.name,
                role: currentUser.role,
                image: currentUser.image
            }
        })

    } catch (error) {
        console.log(`error in logging user: ${error}`)
    }

}

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: process.env.NODE_ENV !== "development"
        })

        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        })

    } catch (error) {
        console.log(`Error in logging out the user: ${error}`)
    }
}

export const check = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "User authenticated successfully",
            user: req.user
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: `Error in checking the user ${error}`
        })
    }
}

import { NextResponse,  NextRequest } from "next/server";
import { z } from 'zod'
import prisma from "@/app/lib/prisma";

const newUserSchema = z.object({
    username: z.string().min(1).max(191),
    email: z.string().min(1).max(191),
    bmi: z.number().min(0).max(100)
})

export async function POST(req: NextRequest) {
    const body = await req.json()
    const validation = newUserSchema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {
            status: 400
        })
    } else {
        const userExists = prisma.user.findUnique({
            where: {
                email: body.email
            }
        })

        if (userExists != null && userExists != undefined) {
            console.log("NEW USER")
            
            const newUser = await prisma.user.create({
                data: {
                    username: body.username,
                    email: body.email,
                    bmi: body.bmi
                }
            })

            return NextResponse.json(newUser, {
                status: 201
            })
            
        } else {
            console.log("UPDATE USER")
            const updatedUser = await prisma.user.update({
                data: {
                    bmi: body.bmi
                },
                where: {
                    email: body.email
                }
            })

            return NextResponse.json(updatedUser, {
                status: 201
            })
        }
    }
}

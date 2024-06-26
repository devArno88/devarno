import mailjet from "@/src/lib/mailjet";
import { clientEnquiryEmail } from "@/src/strings";
import { NextApiRequest, NextApiResponse } from "next";
import { LibraryResponse, SendEmailV3_1 } from "node-mailjet";

const setCors = (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*"); // Allow the actual origin of the request
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return true;
    }
    return false;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (setCors(req, res)) return; // Stop further processing for OPTIONS request

    console.log("Incoming request:", req.method, req.body); // Log the request

    if (req.method === "POST") {
        try {
            const { name, email, subject, message } = req.body;

            const targetEnquiryData: SendEmailV3_1.Body = {
                Messages: [
                    {
                        From: { Email: "alex@devarno.com", Name: "DevArno" },
                        To: [{ Email: "alex@devarno.com", Name: "DevArno" }],
                        Subject: `${subject}`,
                        HTMLPart: `
                            <div>
                                <h4 style="font-size: 20px;">New Enquiry from ${name} [${email}]</h4>
                                <p style="font-size: 16px; margin-top: 12px;">${message}</p>
                            </div>
                        `,
                    },
                ],
            };

            const targetEnquiryResult: LibraryResponse<SendEmailV3_1.Response> = await mailjet
                .post("send", { version: "v3.1" })
                .request(targetEnquiryData);

            console.log("Target Enquiry Result:", targetEnquiryResult); // Log the response

            const targetEnquiryResultBody = targetEnquiryResult.body.Messages[0];

            const authorResponseData: SendEmailV3_1.Body = {
                Messages: [
                    {
                        From: { Email: "alex@devarno.com", Name: "DevArno" },
                        To: [{ Email: email, Name: name }],
                        Subject: `RE: ${subject}`,
                        HTMLPart: clientEnquiryEmail({ name, message }),
                        TextPart: message,
                    },
                ],
            };

            const authorResponseResult: LibraryResponse<SendEmailV3_1.Response> = await mailjet
                .post("send", { version: "v3.1" })
                .request(authorResponseData);

            console.log("Author Response Result:", authorResponseResult); // Log the response

            const authorResponseResultBody = authorResponseResult.body.Messages[0];

            if (targetEnquiryResultBody.Status === "success" && authorResponseResultBody.Status === "success") {
                res.status(200).json({ msg: "Enquiry sent successfully!" });
            } else {
                res.status(500).json({ err: "Something went wrong" });
            }
        } catch (error) {
            console.error("Error processing enquiry:", error);
            res.status(500).json({ err: "Enquiry could not be sent, please try again later" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

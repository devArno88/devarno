import image404 from "@/public/assets/img/404.jpg";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="error_page">
            <div
                className="hero bg-image"
                style={{
                    backgroundImage: `url(${image404.src})`,
                }}
            >
                <div className="content">
                    <h1 data-aos="fade-up" data-aos-duration="1200">
                        404!
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="50"
                    >
                        The page you are looking for could not be found.
                    </p>

                    <div
                        className="button"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                    >
                        <Link href="/">BACK TO HOME</Link>
                    </div>
                    {/* End purchase_button */}
                </div>
            </div>
            {/* End .hero */}
        </div>
    );
}

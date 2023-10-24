import React from "react";

// I added this for reference ince check the responsiveness and then make change whether to use this or your code
const SecurityCards2 = () =>{
    const info = [
        {
            title: "Gain Full Privilege Transparency",
            desc: "Our identity-first security platform discovers and protects users and machine identities, secrets, devices and access across all modern and traditional environments. Rooted in zero trust principles, we ensure unified control and visibility across your entire identity estate.",
            date: "Thursday, December 9th 2021",
            image: "./security1.png",
            href: "javascript:void(0)"
        },
        {
            title: "Detect & Respond to Identity Threats",
            desc: "We're not just modernizing privileged access management - we're redefining it with the power of advanced discovery, intelligence, and deep contextual analytics that reduce identity risk by proactively detecting and combatting attacks across your entire infrastructure.",
            date: "Thursday, December 9th 2021",
            image:"./security2.png",
            href: "javascript:void(0)"
        },
        {
            title: "Secure Remote Access to Any Infrastructure",
            desc: "Our innovative remote access technology, complemented by identity-based privilege controls, delivers VPN-free secure access to any infrastructure. Request, grant, revoke, and audit access seamlessly. Leverage just-in-time access with unmatched granular controls to secure your entire organization.",
            date: "Thursday, December 9th 2021",
            image:"security3.png",
            href: "javascript:void(0)"
        },
        {
            title: "Protect Privileges at Scale",
            desc: "We stand alone with our all-encompassing, scalable privilege control solution. We uniquely integrate robust session management, identity-defined just-in-time access, flexible privilege elevation, and unified credential management, proactively fortifying your workforce identities.",
            date: "Thursday, December 9th 2021",
            image:"./security4.png",
            href: "javascript:void(0)"
        }
      ]
      
    return(
        <section className="mt-12 mx-auto bg-white px-4 max-w-full  md:px-8 mb-16">
            <div className="mx-auto flex ">
                <h1 className="text-3xl text-gray-800 md:mx-auto font-semibold mt-8 ">
                    WE ARE LEADING THE CHARGE IN INNOVATING IDENTITY-FIRST SECURITY
                </h1>
                <p className="mt-3 text-gray-500 mt-8">
                    Go beyond preventative privilege management software with the power of real-time detection to stop identity threats.
                </p>
            </div>

            <div className="mt-12 grid gap-2 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 ">
                {
                    info.map((item, idx) => (
                        <article className="mt-5 pt-8 md:pt-0" key={idx}>
                            <a href={item.href}>
                            <img src={item.image} alt="Image" className="mx-auto mb-2"  style={{ width: '120px', height: 'auto' }} />
                                <span className="block text-gray-400 text-sm">
                                    {item.date}
                                </span>
                                
                                <div className="mt-2">
                                    <h3 className="text-xl text-gray-900 font-semibold ">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>


    )
}
export default SecurityCards2;
const SocialShare = [
    {
        iconName: "fa fa-facebook",
        link: "https://www.facebook.com/",
    },
    { iconName: "fa fa-twitter", link: "https://twitter.com/" },
    {
        iconName: "fa fa-youtube",
        link: "https://www.youtube.com/",
    },
    { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
];

export const Social = () => {
    // TODO: Unblock when socials fixed
    return true ? null : (
        <ul className="social list-unstyled pt-1 mb-5">
            {SocialShare.map((val, i) => (
                <li key={i}>
                    <a href={val.link} target="_blank" rel="noreferrer">
                        <i className={val.iconName}></i>
                    </a>
                </li>
            ))}
        </ul>
    );
};

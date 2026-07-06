import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/Outsider565",
        linkTitle: `Shaowen Wang on GitHub`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:wangsw23@mails.tsinghua.edu.cn",
        linkTitle: `Email Shaowen Wang`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?hl=en&user=TtCmtjAAAAAJ",
        linkTitle: `Shaowen Wang on Google Scholar`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/",
        linkTitle: `Shaowen Wang on ORCID`,
        isActive: false,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        linkTitle: `Shaowen Wang on LinkedIn`,
        isActive: false,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};

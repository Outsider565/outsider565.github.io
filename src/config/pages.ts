import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "Shaowen Wang",
        subtitle: "Large language models, efficient learning, and the mechanics of data.",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Notes and essays.",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "Selected papers and preprints.",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Talks, posters, and presentations.",
        isActive: false,
    },
    projects: {
        title: "Research Threads",
        subtitle: "The questions that organize my current work.",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Courses and teaching materials.",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: false,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Education, research internships, and technical skills.",
        isActive: true,
    },
};

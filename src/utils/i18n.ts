export type Lang = "en" | "zh";

export const DEFAULT_LANG: Lang = "en";
export const LANGS: Lang[] = ["en", "zh"];

export const UI = {
    en: {
        languageName: "English",
        languageSwitch: "中文",
        nav: {
            about: "About",
            misc: "Misc",
            publications: "Publications",
        },
        pages: {
            home: {
                title: "Shaowen Wang",
                subtitle: "Making pre-training a science: deriving how to build models from understanding how they learn.",
            },
            publications: {
                title: "Publications",
                subtitle: "",
            },
            misc: {
                title: "Misc",
                subtitle: "",
            },
            selectedPapers: {
                title: "Selected Papers",
                subtitle: "",
            },
        },
        labels: {
            summary: "Abstract",
            external: "Paper link",
            back: {
                publications: "publications",
            },
        },
    },
    zh: {
        languageName: "中文",
        languageSwitch: "EN",
        nav: {
            about: "关于",
            misc: "杂项",
            publications: "论文",
        },
        pages: {
            home: {
                title: "王少文",
                subtitle: "把预训练从炼丹变成科学：先理解模型如何学习，再推导模型如何构建。",
            },
            publications: {
                title: "论文",
                subtitle: "",
            },
            misc: {
                title: "杂项",
                subtitle: "",
            },
            selectedPapers: {
                title: "精选论文",
                subtitle: "",
            },
        },
        labels: {
            summary: "摘要",
            external: "论文链接",
            back: {
                publications: "论文",
            },
        },
    },
} as const;

export function getLangFromPath(pathname: string): Lang {
    return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : DEFAULT_LANG;
}

export function stripLang(pathname: string): string {
    if (pathname === "/zh") return "/";
    if (pathname.startsWith("/zh/")) return pathname.slice(3) || "/";
    return pathname || "/";
}

export function withLang(pathname: string, lang: Lang): string {
    const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
    if (lang === "zh") return normalized === "/" ? "/zh" : `/zh${normalized}`;
    return normalized;
}

export function switchLangPath(pathname: string, targetLang: Lang): string {
    return withLang(stripLang(pathname), targetLang);
}

export function collectionPath(collection: "publications", id: string | undefined, lang: Lang): string {
    const base = `/${collection}`;
    return withLang(id ? `${base}/${id}` : base, lang);
}

export function navLinks(lang: Lang) {
    const copy = UI[lang].nav;
    return [
        { href: withLang("/", lang), label: copy.about },
        { href: withLang("/publications", lang), label: copy.publications },
        { href: withLang("/misc", lang), label: copy.misc },
    ];
}

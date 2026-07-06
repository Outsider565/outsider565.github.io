import type { ListingItem, DetailItem } from "../types";
import type { Lang } from "./i18n";

function formatDate(dateValue: string | Date | undefined, lang: Lang = "en"): string | undefined {
    if (!dateValue) return undefined;
    const date = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
    if (isNaN(date.getTime())) return undefined;
    return date.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", { year: 'numeric', month: 'long' });
}

export function getListingItem(entry: any, lang: Lang = "en", collection?: string): ListingItem {
    const d = entry.data;
    const localizedDescription = lang === "zh" && d.description_zh ? d.description_zh : d.description;
    const intro = lang === "zh" && d.abstract_zh ? d.abstract_zh : d.abstract;
    
    return {
        title: d.title,
        description: localizedDescription,
        date: formatDate(d.date, lang),
        authors: d.author,
        extraInput: d.journal || d.event || d.institution,
        tags: d.tags || [],
        externalUrl: d.external_url,
        image: d.image,
        intro,
    };
}

export function getDetailItem(entry: any, collection: string, lang: Lang = "en"): DetailItem {
    const listing = getListingItem(entry, lang, collection);
    
    return {
        ...listing,
        backHref: lang === "zh" ? `/zh/${collection}` : `/${collection}`,
    };
}

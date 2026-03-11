import { IconBase, type IconProps } from './IconBase';

export { IconBase };
export type { IconProps };

export const ActivityIcon = (props: IconProps) => (
    <IconBase {...props}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </IconBase>
);

export const ArrowRightIcon = (props: IconProps) => (
    <IconBase {...props}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </IconBase>
);

export const BookIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </IconBase>
);

export const CalendarIcon = (props: IconProps) => (
    <IconBase {...props}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </IconBase>
);

export const CheckIcon = (props: IconProps) => (
    <IconBase {...props}>
        <polyline points="20 6 9 17 4 12" />
    </IconBase>
);

export const ChevronDownIcon = (props: IconProps) => (
    <IconBase {...props}>
        <polyline points="6 9 12 15 18 9" />
    </IconBase>
);

export const ChevronLeftIcon = (props: IconProps) => (
    <IconBase {...props}>
        <polyline points="15 18 9 12 15 6" />
    </IconBase>
);

export const ChevronRightIcon = (props: IconProps) => (
    <IconBase {...props}>
        <polyline points="9 18 15 12 9 6" />
    </IconBase>
);

export const CloseIcon = (props: IconProps) => (
    <IconBase {...props}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </IconBase>
);

export const EditIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
    </IconBase>
);

export const ExternalLinkIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M14 3h7v7" />
        <path d="M10 14L21 3" />
        <path d="M21 14v7H3V3h7" />
    </IconBase>
);

export const FileIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
    </IconBase>
);

export const GithubIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
    </IconBase>
);

export const HomeIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
    </IconBase>
);

export const InfoIcon = (props: IconProps) => (
    <IconBase {...props}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
    </IconBase>
);

export const LayoutIcon = (props: IconProps) => (
    <IconBase {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="9" y1="9" x2="21" y2="9" />
    </IconBase>
);

export const LockIcon = (props: IconProps) => (
    <IconBase {...props}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </IconBase>
);

export const MenuIcon = (props: IconProps) => (
    <IconBase {...props}>
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </IconBase>
);

export const MoonIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </IconBase>
);

export const PlusIcon = (props: IconProps) => (
    <IconBase {...props}>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </IconBase>
);

export const SearchIcon = (props: IconProps) => (
    <IconBase {...props}>
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </IconBase>
);

export const SettingsIcon = (props: IconProps) => (
    <IconBase {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.92 4.6H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.64 0 1.22.38 1.48.97.08.2.12.4.12.61s-.04.41-.12.61A1.65 1.65 0 0 0 19.4 15z" />
    </IconBase>
);

export const ShieldIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </IconBase>
);

export const SunIcon = (props: IconProps) => (
    <IconBase {...props}>
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </IconBase>
);

export const TrashIcon = (props: IconProps) => (
    <IconBase {...props}>
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M9 6V4h6v2" />
    </IconBase>
);

export const UploadIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </IconBase>
);

export const WarningIcon = (props: IconProps) => (
    <IconBase {...props}>
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </IconBase>
);

export const ZapIcon = (props: IconProps) => (
    <IconBase {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </IconBase>
);

export const MinusIcon = (props: IconProps) => (
    <IconBase {...props}>
        <line x1="5" y1="12" x2="19" y2="12" />
    </IconBase>
);
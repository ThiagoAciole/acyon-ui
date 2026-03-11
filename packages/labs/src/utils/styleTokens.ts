export type TokenColor = 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'neutral';
export type TokenTextColor = TokenColor | 'default' | 'subtle' | 'muted' | 'inverse' | 'disabled';
export type TokenIconColor = TokenColor | 'default' | 'disabled';

export type TokenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TokenWeight = 'normal' | 'medium' | 'semibold' | 'bold';

const TOKEN_COLORS: readonly TokenColor[] = ['primary', 'success', 'danger', 'warning', 'info', 'neutral'];

function normalizeTokenColor(color?: TokenColor): TokenColor | undefined {
    if (!color) return undefined;
    return TOKEN_COLORS.includes(color) ? color : undefined;
}

export function colorVar(color?: TokenColor): string | undefined {
    if (!color) return undefined;
    if (color === 'neutral') return 'var(--border-main)';
    return `var(--color-${color})`;
}

export function textColorVar(color?: TokenTextColor): string | undefined {
    if (!color) return 'var(--text-main)';
    if (color === 'default') return 'var(--text-main)';
    if (color === 'disabled') return 'var(--text-muted)';
    if (color === 'subtle') return 'var(--text-subtle)';
    if (color === 'muted') return 'var(--text-muted)';
    if (color === 'inverse') return 'var(--text-inverse)';

    const normalized = normalizeTokenColor(color as TokenColor);
    if (!normalized) return 'var(--text-main)';
    return `var(--color-${normalized})`;
}

export function iconColorVar(color?: TokenIconColor): string | undefined {
    if (!color) return 'currentColor';
    if (color === 'default') return 'currentColor';
    if (color === 'disabled') return 'var(--text-muted)';

    const normalized = normalizeTokenColor(color as TokenColor);
    if (!normalized) return 'currentColor';
    return `var(--color-${normalized})`;
}

export function fontSizeVar(size?: TokenSize): string | undefined {
    return size ? `var(--font-size-${size})` : undefined;
}

export function fontWeightVar(weight?: TokenWeight): string | undefined {
    return weight ? `var(--font-weight-${weight})` : undefined;
}

export function spaceVar(space: string | number): string {
    return `var(--space-${space})`;
}

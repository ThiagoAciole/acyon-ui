import type * as React from 'react';

export type AvatarSize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    name?: string;
    size?: AvatarSize;
    status?: AvatarStatus;
}

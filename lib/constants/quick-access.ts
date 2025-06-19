import CashbackIcon from '/public/icons/cashback.svg';
import SportRaceIcon from '/public/icons/sport-race.svg';
import MinigamesIcon from '/public/icons/minigames.svg';
import RacingIcon from '/public/icons/racing.svg';
import LivecasinoIcon from '/public/icons/livecasino.svg';
import LiveIcon from '/public/icons/live.svg';
import { QuickAccess } from '@/types/QuickAccess';

export const quickAccesses: QuickAccess[] = [
    {
        label: 'Free to earn',
        url: '/free-to-earn',
        icon: CashbackIcon
    },
    {
        label: 'Ranking',
        url: '/ranking',
        icon: SportRaceIcon
    },
    {
        label: 'Video-NFT',
        url: '/video-nft',
        icon: LiveIcon
    },
    {
        label: 'How to buy',
        url: '/how-to-buy',
        icon: RacingIcon
    },
        {
        label: 'New NFTS',
        url: '/new-NFTS',
        icon: LivecasinoIcon
    },
        {
        label: 'Roadmaps',
        url: '/roadmaps',
        icon: MinigamesIcon
    }
]
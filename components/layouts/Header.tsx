import NavBar from '@/components/ui/Navbar';
import { menus } from '@/lib/constants/menus';

export default function Header() {
    return (
        <header className='sticky top-0 z-50 bg-neutral-accent'>
            <NavBar menus={menus} />
        </header>
    );
}

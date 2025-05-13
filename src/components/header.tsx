import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '~components/ui/navigation-menu.tsx';
import { Link } from 'react-router';
import { routes } from '~config/routes-config.ts';

export const Header = () => {
  return (
    <NavigationMenu className={'m-auto p-4'}>
      <NavigationMenuList>
        {Object.entries(routes).map(([key, route]) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuLink asChild>
              <Link to={route.path}>{route.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

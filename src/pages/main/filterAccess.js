function filterAccess(menus, roles) {
    return menus.filter((menu) => {
        if (Array.isArray(menu.route)) {
            menu.route = filterAccess(menu.route, roles);
        }
        if (!menu.access) {
            return true;
        }
        if (roles.some((role) => menu.access.includes(role?.name))) {
            return true;
        }
        return false;
    });
}

export default filterAccess;
const employeeMenus = [
    {
        name: "Employees",
        route: '/employees'
    },
    {
        name: "Positions",
        route: '/employees'
    }
];
const userMenus = [
    {
        name: "Users",
        route: '/users'
    },
    {
        name: "Roles",
        route: '/employees'
    }
];

export default [
    {
        name: "Dashboard",
        icon: 'bi bi-layout-text-window-reverse',
        route: '/dashboard'
    },
    {
        name: "User Management",
        icon: "bi bi-person-lines-fill",
        route: userMenus,
    },
    {
        name: "Employee Management",
        icon: "bi bi-people-fill",
        route: employeeMenus,
    },
];

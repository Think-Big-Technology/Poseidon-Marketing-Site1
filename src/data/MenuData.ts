interface MenuItem {
    id: number;
    page: string;
    title: string;
    link: string;
    has_dropdown: boolean;
    mega_menu?: boolean;
    sub_menus?: {
        link: string;
        title: string;
        demo_pic?: string;
    }[];
};

const menu_data: MenuItem[] = [

    {
        id: 1,
        page: "home_1",
        has_dropdown: true,
        title: "Home",
        link: "#",
        mega_menu: true,
        sub_menus: [
            { link: "/", title: "Blockchain", demo_pic: "/assets/img/demo/demo-1.jpg" },
            { link: "/home-two", title: "Bitcoin Mining", demo_pic: "/assets/img/demo/demo-2.jpg" },
            { link: "/home-three", title: "ICO", demo_pic: "/assets/img/demo/demo-3.jpg" },
            { link: "#", title: "Coming Soon", demo_pic: "/assets/img/demo/coming-soon.jpg" },
        ],
    },
    {
        id: 2,
        page: "home_1",
        has_dropdown: false,
        title: "Feature",
        link: "/#feature",
    },
    {
        id: 3,
        page: "home_1",
        has_dropdown: false,
        title: "Team",
        link: "/#team",
    },
    {
        id: 4,
        page: "home_1",
        has_dropdown: false,
        title: "Roadmap",
        link: "/#roadmap",
    },
    {
        id: 5,
        page: "home_1",
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-single", title: "Blog Details", },
        ],
    },
    {
        id: 6,
        page: "home_1",
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },

    // home_2

    {
        id: 1,
        page: "home_2",
        has_dropdown: true,
        title: "Home",
        link: "#",
        sub_menus: [
            { link: "/", title: "Blockchain", },
            { link: "/home-two", title: "Bitcoin Mining", },
            { link: "/home-three", title: "ICO", },
        ],
    },
    {
        id: 2,
        page: "home_2",
        has_dropdown: false,
        title: "Pricing",
        link: "/home-two/#pricing",
    },
    {
        id: 3,
        page: "home_2",
        has_dropdown: false,
        title: "Services",
        link: "/home-two/#services",
    },
    {
        id: 4,
        page: "home_2",
        has_dropdown: false,
        title: "Product",
        link: "/home-two/#product",
    },
    {
        id: 5,
        page: "home_2",
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-single", title: "Blog Details", },
        ],
    },
    {
        id: 6,
        page: "home_2",
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },

    // home_3

    {
        id: 1,
        page: "home_3",
        has_dropdown: true,
        title: "Home",
        link: "#",
        mega_menu: true,
        sub_menus: [
            { link: "/", title: "Blockchain", demo_pic: "/assets/img/demo/demo-1.jpg" },
            { link: "/home-two", title: "Bitcoin Mining", demo_pic: "/assets/img/demo/demo-2.jpg" },
            { link: "/home-three", title: "ICO", demo_pic: "/assets/img/demo/demo-3.jpg" },
            { link: "#", title: "Coming Soon", demo_pic: "/assets/img/demo/coming-soon.jpg" },
        ],
    },
    {
        id: 2,
        page: "home_3",
        has_dropdown: false,
        title: "About",
        link: "/home-three/#about",
    },
    {
        id: 3,
        page: "home_3",
        has_dropdown: false,
        title: "Roadmap",
        link: "/home-three/#roadmap",
    },
    {
        id: 4,
        page: "home_3",
        has_dropdown: false,
        title: "Team",
        link: "/home-three/#team",
    },
    {
        id: 5,
        page: "home_3",
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-single", title: "Blog Details", },
        ],
    },
    {
        id: 6,
        page: "home_3",
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];
export default menu_data;

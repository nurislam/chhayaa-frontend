const menu_data = [
    {
        title: 'Home',
        link: '/',
        home_mega_menu:false,
       
    },
    {
        title: 'About Us',
        link: '/about', 
    },
    {
        title: 'Courses',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Course Style 1', link: '/course-style-1' },
            { title: 'Course Style 2', link: '/course-style-2' },
            { title: 'Course Style 3', link: '/course-style-3' },
            { title: 'Course Style 4', link: '/course-style-4' },
            { title: 'Course Style 5', link: '/course-style-5' },
            { title: 'Course Details 1', link: '/course-details' },
            { title: 'Course Details 2', link: '/course-details-2' },
            { title: 'Course Details 3', link: '/course-details-3' }
        ]
    },
    {
        title: 'Blog',
        link: '/blog',
        mega_menu: false,
        
    },
    {
        title: 'Contact',
        link: '/contact-us',
        mega_menu: false,
         
    }
]

export default menu_data;
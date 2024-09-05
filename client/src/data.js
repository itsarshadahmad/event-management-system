export const events = [
    {
        _id: "669e6bd0823d20fb2d485116",
        title: "Web dev bootcamp",
        description:
            "Ready to dive into the world of web development? Our intensive bootcamp is designed to equip you with the skills to build stunning websites and robust web applications. Whether you're a complete beginner or looking to enhance your existing coding knowledge, this bootcamp is for you. Learn from industry experts as you master HTML, CSS, JavaScript, and beyond. Immerse yourself in hands-on projects and gain practical experience. By the end of the bootcamp, you'll have a strong foundation to launch your career as a web developer. Limited spots available, so register now!",
        date: "2024-07-27T00:00:00.000Z",
        venue: "Zoom",
        capacity: 100,
        attendees: [
            {
                _id: "6694f641cf3940f09b378dd5",
            },
        ],
        tag: "Workshop",
        categories: ["JavaScript", "HTML", "CSS"],
        organizer: {
            _id: "6696b8aab991baee6c05e4f6",
        },
        duration: 2,
        KeySpeaker: [
            {
                name: "Yaqub",
                bio: "Software Engineer",
                topic: "JavaScript Internals",
                _id: "669e6bd0823d20fb2d485117",
            },
            {
                name: "Hamid",
                bio: "Full Stack Dev",
                topic: "DSA",
                _id: "66a0e24f93784fc16eff1f70",
            },
        ],
        announcement: [
            {
                title: "Please register at our website for new workshop",
                description:
                    "Register at https://example.com for all new workshop and access recording of previous workshops as well",
                date: {
                    $date: "2024-07-24T06:00:16.585Z",
                },
                _id: "66a0987941e2cc65c21d4c37",
            },
            {
                title: "Please fill feedback form from our website",
                description:
                    "Fill feedback form at https://example.com and register for all new workshop and access recording of previous workshops as well",
                date: "2024-07-24T06:07:53.416Z",
                _id: "66a09a3fcdd64b60c548d825",
            },
        ],
        createdAt: {
            date: "2024-07-22T14:25:20.274Z",
        },
        updatedAt: {
            date: "2024-07-25T14:10:24.438Z",
        },
        __v: 0,
    },
    {
        _id: "669f482af8f005f4747dc51f",
        title: "Devs Meetup",
        description: "All devs meetup",
        date: "2024-07-28T00:00:00.000Z",
        venue: "Street Hall 12 - XYZ, CityName, India",
        capacity: 100,
        attendees: [],
        tag: "Meetup",
        categories: ["Developers", "Meetup"],
        organizer: {
            $_id: "6696b8aab991baee6c05e4f6",
        },
        KeySpeaker: [],
        announcement: [],
        createdAt: {
            date: "2024-07-23T06:05:30.575Z",
        },
        updatedAt: {
            date: "2024-07-23T06:05:30.575Z",
        },
        __v: 0,
    },
    {
        _id: "669f497a083e2fa628145222",
        title: "Java Bootcamp",
        description: "Learning coding with Java - Bootcamp",
        date: "2024-08-19T00:00:00.000Z",
        venue: "Street Hall 12 - XYZ, CityName, India",
        capacity: 250,
        attendees: [],
        tag: "Bootcamp",
        categories: ["Developers", "Bootcamp", "Java", "Intro to coding"],
        organizer: {
            _id: "6696b8aab991baee6c05e4f6",
        },
        duration: 4,
        KeySpeaker: [
            {
                name: "Yaqub",
                bio: "Software Engineer",
                topic: "Intro to Java and Intro to coding",
                _id: {
                    $oid: "669f497a083e2fa628145223",
                },
            },
            {
                name: "Jonah",
                bio: "Software Engineer",
                topic: "Data Structures With Java and Java Advanced",
                _id: "669f497a083e2fa628145224",
            },
        ],
        announcement: [],
        createdAt: {
            date: "2024-07-23T06:11:06.279Z",
        },
        updatedAt: {
            date: "2024-07-23T06:11:06.279Z",
        },
        __v: 0,
    },
];

export const users = [
    {
        _id: "6694f641cf3940f09b378dd5",
        fullName: "Adam",
        email: "adam@y2k.com",
        password:
            "$2b$10$PGPx0slAMouDnUjCioC3/uC5BF/AqBXVmVWXYfClORLKpNAab.LZm",
        createdAt: {
            date: "2024-07-15T10:13:21.339Z",
        },
        updatedAt: {
            date: "2024-07-25T14:10:24.462Z",
        },
        __v: 0,
        ticket: [
            {
                _id: "669e6bd0823d20fb2d485116",
            },
        ],
    },
    {
        _id: "6694f69567c66fd9976f8f53",
        fullName: "Jacob",
        email: "jacob@y2k.com",
        password:
            "$2b$10$HAw2/CD.YYSE/jXVnTpHKO7TrKHwf8oVTxDGPoTpT01gG./aUK0SC",
        createdAt: {
            date: "2024-07-15T10:14:45.900Z",
        },
        updatedAt: {
            date: "2024-07-15T10:14:45.900Z",
        },
        __v: 0,
    },
    {
        _id: "6694f6d49cb858ae9eb3fabf",
        fullName: "Solomon",
        email: "solomon@y2k.com",
        password:
            "$2b$10$ylDUsm4U6Fq67ITTvM1jEeyhwx/YUIQLImY3agwvWqkixHDtml3wS",
        createdAt: {
            date: "2024-07-15T10:15:48.330Z",
        },
        updatedAt: {
            date: "2024-07-15T10:15:48.330Z",
        },
        __v: 0,
    },
];

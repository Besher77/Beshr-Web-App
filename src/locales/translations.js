export const translations = {
  en: {
    navbar: {
      logo: 'Beshr',
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      skills: 'Skills',
      contact: 'Contact',
    },
    home: {
      greeting: 'Hi, I\'m',
      name: 'Beshr Qashar',
      role: 'Full Stack Developer',
      description: 'I\'m a passionate developer specializing in building exceptional digital experiences. Currently, I\'m focused on building responsive full-stack web applications.',
      cta: 'View Work',
      downloadCV: 'Download CV',
      social: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername'
      }
    },
    about: {
      title: 'About Me',
      description: [
        'Hello! I\'m Beshr, a passionate Full Stack Developer based in the heart of technology. With a keen eye for detail and a love for clean, efficient code, I specialize in creating digital experiences that combine functionality with aesthetic appeal.',
        'My journey in web development started with curiosity and has evolved into expertise across multiple technologies and frameworks. I\'m particularly experienced in React, Node.js, and modern web technologies.',
        'When I\'m not coding, you\'ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.'
      ]
    },
    portfolio: {
      title: 'Portfolio',
      description: 'Check out some of my recent work',
      projects: [
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'A full-stack e-commerce solution with React and Node.js. Features include user authentication, product management, shopping cart, payment integration, and order tracking.',
          tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'full-stack',
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80'
        },
        {
          id: 2,
          title: 'Social Media Dashboard',
          description: 'Real-time social media analytics dashboard with live data visualization, user engagement metrics, and customizable reporting features. Built with React and Firebase.',
          tech: ['React', 'Firebase', 'Material-UI', 'Chart.js', 'Redux', 'Node.js'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'full-stack',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
        },
        {
          id: 3,
          title: 'Task Management App',
          description: 'Collaborative task management application with real-time updates, team collaboration features, and progress tracking. Integrates with popular productivity tools.',
          tech: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'full-stack',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
        },
        {
          id: 4,
          title: 'Fitness Tracking Mobile App',
          description: 'Cross-platform mobile application for fitness tracking with workout planning, progress monitoring, and social features. Built with React Native.',
          tech: ['React Native', 'Redux', 'Firebase', 'Node.js', 'MongoDB'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'mobile',
          image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80'
        },
        {
          id: 5,
          title: 'Food Delivery App',
          description: 'Native mobile application for food ordering and delivery with real-time order tracking, payment processing, and restaurant management features.',
          tech: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Node.js'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'mobile',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80'
        },
        {
          id: 6,
          title: 'Brand Identity Design',
          description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.',
          tech: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
          demo: 'https://demo.com',
          category: 'design',
          image: 'https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        }
      ]
    },
    skills: {
      title: 'My Skills',
      description: 'These are the technologies I\'ve worked with',
      sections: {
        frontend: {
          title: 'Frontend Development',
          skills: [
            { name: 'HTML', icon: 'SiHtml5' },
            { name: 'CSS', icon: 'SiCss3' },
            { name: 'JavaScript', icon: 'SiJavascript' },
            { name: 'React', icon: 'SiReact' },
            { name: 'Tailwind', icon: 'SiTailwindcss' },
            { name: 'Bootstrap', icon: 'SiBootstrap' },
            { name: 'Material UI', icon: 'SiMaterialui' },
            { name: 'TypeScript', icon: 'SiTypescript' },
            { name: 'Next.js', icon: 'SiNextdotjs' },
            { name: 'Vue.js', icon: 'SiVuedotjs' }
          ]
        },
        mobile: {
          title: 'Mobile Development',
          skills: [
            { name: 'Flutter', icon: 'SiFlutter' },
            { name: 'React Native', icon: 'SiReact' },
            { name: 'Android', icon: 'SiAndroid' },
            { name: 'Java', icon: 'SiJava' },
            { name: 'Kotlin', icon: 'SiKotlin' },
            { name: 'Swift', icon: 'SiSwift' },
            { name: 'Firebase', icon: 'SiFirebase' }
          ]
        },
        backend: {
          title: 'Backend Development',
          skills: [
            { name: 'Node.js', icon: 'SiNodedotjs' },
            { name: 'Express', icon: 'SiExpress' },
            { name: 'PHP', icon: 'SiPhp' },
            { name: 'Laravel', icon: 'SiLaravel' },
            { name: 'MySQL', icon: 'SiMysql' },
            { name: 'MongoDB', icon: 'SiMongodb' },
            { name: 'PostgreSQL', icon: 'SiPostgresql' },
            { name: 'Python', icon: 'SiPython' },
            { name: 'Django', icon: 'SiDjango' }
          ]
        },
        tools: {
          title: 'Tools & DevOps',
          skills: [
            { name: 'Git', icon: 'SiGit' },
            { name: 'GitHub', icon: 'SiGithub' },
            { name: 'Docker', icon: 'SiDocker' },
            { name: 'AWS', icon: 'SiAmazonaws' },
            { name: 'Linux', icon: 'SiLinux' },
            { name: 'VS Code', icon: 'SiVisualstudiocode' },
            { name: 'Android Studio', icon: 'SiAndroidstudio' },
            { name: 'Xcode', icon: 'SiXcode' },
            { name: 'Postman', icon: 'SiPostman' }
          ]
        }
      }
    },
    contact: {
      title: 'Contact',
      description: 'Submit the form below to get in touch with me',
      form: {
        name: 'Enter your name',
        email: 'Enter your email',
        message: 'Enter your message',
        submit: 'Let\'s talk'
      }
    },
    footer: {
      copyright: ' All rights reserved',
      links: {
        about: 'About',
        portfolio: 'Portfolio',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      },
      social: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        twitter: 'https://twitter.com/yourusername'
      }
    }
  },
  ar: {
    navbar: {
      logo: 'بشر',
      home: 'الرئيسية',
      about: 'عني',
      portfolio: 'أعمالي',
      skills: 'مهاراتي',
      contact: 'اتصل بي'
    },
    home: {
      greeting: 'مرحباً، أنا',
      name: 'بشر قشار',
      role: 'مطور ويب شامل',
      description: 'أنا مطور متحمس متخصص في بناء تجارب رقمية استثنائية. حالياً، أركز على بناء تطبيقات ويب متكاملة ومتجاوبة.',
      cta: 'شاهد أعمالي',
      downloadCV: 'تحميل السيرة الذاتية',
      social: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername'
      }
    },
    about: {
      title: 'عني',
      description: [
        'مرحباً! أنا بشر، مطور ويب شامل متحمس. مع عين حادة للتفاصيل وحب للكود النظيف والفعال، أتخصص في إنشاء تجارب رقمية تجمع بين الوظائف والجمال.',
        'بدأت رحلتي في تطوير الويب بالفضول وتطورت إلى خبرة في العديد من التقنيات والإطارات. أنا متمرس بشكل خاص في React و Node.js وتقنيات الويب الحديثة.',
        'عندما لا أكون مشغولاً بالكود، ستجدني استكشاف تقنيات جديدة أو المساهمة في مشاريع مفتوحة المصدر أو مشاركة المعرفة مع مجتمع المطورين.'
      ]
    },
    portfolio: {
      title: 'معرض الأعمال',
      description: 'استعرض بعض من أعمالي الحديثة',
      projects: [
        {
          id: 1,
          title: 'منصة التجارة الإلكترونية',
          description: 'حل متكامل للتجارة الإلكترونية مع React و Node.js. يتضمن مصادقة المستخدم، وإدارة المنتجات، وسلة التسوق، ودمج المدفوعات، وتتبع الطلبات.',
          tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'full-stack',
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80'
        },
        {
          id: 2,
          title: 'لوحة تحكم وسائل التواصل الاجتماعي',
          description: 'لوحة تحليلات في الوقت الفعلي لوسائل التواصل الاجتماعي مع تصور البيانات المباشر، ومقاييس مشاركة المستخدم، وميزات إعداد التقارير القابلة للتخصيص.',
          tech: ['React', 'Firebase', 'Material-UI', 'Chart.js', 'Redux', 'Node.js'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'full-stack',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80'
        },
        {
          id: 3,
          title: 'تطبيق إدارة المهام',
          description: 'تطبيق إدارة مهام تعاوني مع تحديثات في الوقت الفعلي، وميزات تعاون الفريق، وتتبع التقدم. يتكامل مع أدوات الإنتاجية الشائعة.',
          tech: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'full-stack',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
        },
        {
          id: 4,
          title: 'تطبيق تتبع اللياقة البدنية',
          description: 'تطبيق جوال متعدد المنصات لتتبع اللياقة البدنية مع تخطيط التمارين، ومراقبة التقدم، والميزات الاجتماعية. تم بناؤه باستخدام React Native.',
          tech: ['React Native', 'Redux', 'Firebase', 'Node.js', 'MongoDB'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'mobile',
          image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80'
        },
        {
          id: 5,
          title: 'تطبيق توصيل الطعام',
          description: 'تطبيق جوال أصلي لطلب وتوصيل الطعام مع تتبع الطلبات في الوقت الفعلي، ومعالجة الدفع، وميزات إدارة المطاعم.',
          tech: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe', 'Node.js'],
          demo: 'https://demo.com',
          code: 'https://github.com',
          category: 'mobile',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80'
        },
        {
          id: 6,
          title: 'تصميم الهوية التجارية',
          description: 'تصميم هوية تجارية كاملة تشمل الشعار، ولوحة الألوان، والطباعة، وإرشادات العلامة التجارية لشركة ناشئة في مجال التكنولوجيا.',
          tech: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
          demo: 'https://demo.com',
          category: 'design',
          image: 'https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        }
      ]
    },
    skills: {
      title: 'مهاراتي',
      description: 'هذه التقنيات التي عملت بها',
      sections: {
        frontend: {
          title: 'تطوير الواجهة الأمامية',
          skills: [
            { name: 'HTML', icon: 'SiHtml5' },
            { name: 'CSS', icon: 'SiCss3' },
            { name: 'JavaScript', icon: 'SiJavascript' },
            { name: 'React', icon: 'SiReact' },
            { name: 'Tailwind', icon: 'SiTailwindcss' },
            { name: 'Bootstrap', icon: 'SiBootstrap' },
            { name: 'Material UI', icon: 'SiMaterialui' },
            { name: 'TypeScript', icon: 'SiTypescript' },
            { name: 'Next.js', icon: 'SiNextdotjs' },
            { name: 'Vue.js', icon: 'SiVuedotjs' }
          ]
        },
        mobile: {
          title: 'تطوير الهاتف المحمول',
          skills: [
            { name: 'Flutter', icon: 'SiFlutter' },
            { name: 'React Native', icon: 'SiReact' },
            { name: 'Android', icon: 'SiAndroid' },
            { name: 'Java', icon: 'SiJava' },
            { name: 'Kotlin', icon: 'SiKotlin' },
            { name: 'Swift', icon: 'SiSwift' },
            { name: 'Firebase', icon: 'SiFirebase' }
          ]
        },
        backend: {
          title: 'تطوير الخلفية',
          skills: [
            { name: 'Node.js', icon: 'SiNodedotjs' },
            { name: 'Express', icon: 'SiExpress' },
            { name: 'PHP', icon: 'SiPhp' },
            { name: 'Laravel', icon: 'SiLaravel' },
            { name: 'MySQL', icon: 'SiMysql' },
            { name: 'MongoDB', icon: 'SiMongodb' },
            { name: 'PostgreSQL', icon: 'SiPostgresql' },
            { name: 'Python', icon: 'SiPython' },
            { name: 'Django', icon: 'SiDjango' }
          ]
        },
        tools: {
          title: 'الأدوات و DevOps',
          skills: [
            { name: 'Git', icon: 'SiGit' },
            { name: 'GitHub', icon: 'SiGithub' },
            { name: 'Docker', icon: 'SiDocker' },
            { name: 'AWS', icon: 'SiAmazonaws' },
            { name: 'Linux', icon: 'SiLinux' },
            { name: 'VS Code', icon: 'SiVisualstudiocode' },
            { name: 'Android Studio', icon: 'SiAndroidstudio' },
            { name: 'Xcode', icon: 'SiXcode' },
            { name: 'Postman', icon: 'SiPostman' }
          ]
        }
      }
    },
    contact: {
      title: 'اتصل بي',
      description: 'املأ النموذج أدناه للتواصل معي',
      form: {
        name: 'أدخل اسمك',
        email: 'أدخل بريدك الإلكتروني',
        message: 'أدخل رسالتك',
        submit: 'دعنا نتحدث'
      }
    },
    footer: {
      copyright: ' جميع الحقوق محفوظة',
      links: {
        about: 'عني',
        portfolio: 'أعمالي',
        contact: 'اتصل بي',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة'
      },
      social: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        twitter: 'https://twitter.com/yourusername'
      }
    }
  }
};

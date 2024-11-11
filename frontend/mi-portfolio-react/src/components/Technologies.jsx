import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const technologies = [
    { name: 'HTML5', logo: '/assets/logos/Html.svg', level: 90 },
    { name: 'CSS3', logo: '/assets/logos/css.svg', level: 85 },
    { name: 'JavaScript', logo: '/assets/logos/javascript.svg', level: 80 },
    { name: 'React', logo: '/assets/logos/react-logo.svg', level: 75 },
    { name: 'Tailwind CSS', logo: '/assets/logos/Tailwind_CSS_Logo.svg', level: 70 },
    { name: 'Python', logo: '/assets/logos/Python-logo.svg', level: 85 },
    { name: 'Django', logo: '/assets/logos/django-logo.svg', level: 80, className: 'logo-django' },
    { name: 'Git', logo: '/assets/logos/Git-Icon.svg', level: 90 },
    { name: 'GitHub', logo: '/assets/logos/github-logo.svg', level: 88 },
];

const Technologies = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const updateDarkMode = () => {
            const darkModeClass = document.documentElement.classList.contains('dark');
            setIsDarkMode(darkModeClass);
        };

        updateDarkMode();

        const observer = new MutationObserver(updateDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="py-8 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center mb-6 text-text-primary dark:text-text-light">
                Tecnologías
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech) => {
                    const pathColor = isDarkMode ? '#60A5FA' : '#3B82F6';
                    const textColor = isDarkMode ? '#FFFFFF' : '#374151';
                    const trailColor = isDarkMode ? '#374151' : '#d1d5db';

                    return (
                        <div
                            key={tech.name}
                            className="group flex flex-col items-center p-4 bg-background-light dark:bg-background-dark rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
                            style={{ width: '150px' }}
                        >
                            <div className="w-16 h-16 mb-2">
                                <CircularProgressbar
                                    value={tech.level}
                                    text={`${tech.level}%`}
                                    styles={buildStyles({
                                        textSize: '16px',
                                        pathColor: pathColor,
                                        textColor: textColor,
                                        trailColor: trailColor,
                                    })}
                                />
                            </div>
                            <img
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                className={`w-12 h-12 mb-2 ${tech.name === 'Django' ? 'dark:bg-gray-200 p-2 rounded' : ''
                                    }`}
                            />
                            <h3 className="text-md font-semibold mb-1 text-center text-text-primary dark:text-text-light">
                                {tech.name}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Technologies;


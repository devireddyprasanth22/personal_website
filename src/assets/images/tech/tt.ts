import bash from  "./icons8-bash.svg";
import html from  "./icons8-html-5.svg";
import javascript from  "./icons8-javascript.svg";
import mui from  "./icons8-mui.svg";
import postgresql from  "./icons8-postgresql.svg";
import python from  "./icons8-python.svg";
import pytorch from  "./icons8-pytorch.svg";
import react from  "./icons8-react.svg";
import vuejs from  "./icons8-vue-js.svg";
import nodejs from  "./nodejs-icon.svg";

interface IconDetails {
    icon: string;
    name: string;
}

export const techStack: IconDetails[] = [
    {
        icon: bash,
        name: 'Bash'
    },
    {
        icon: html,
        name: 'HTML'
    },
    {
        icon: javascript,
        name: 'JavaScript'
    },
    {
        icon: mui,
        name: 'MUI'
    },
    {
        icon: postgresql,
        name: 'PostgreSQL'
    },
    {
        icon: python,
        name: 'Python'
    },
    {
        icon: pytorch,
        name: 'PyTorch'
    },
    {
        icon: react,
        name: 'React'
    },
    {
        icon: vuejs,
        name: 'VueJS'
    },
    {
        icon:  nodejs,
        name: 'NodeJS'
    },
]
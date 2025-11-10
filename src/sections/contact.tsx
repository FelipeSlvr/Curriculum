import { Github, Linkedin } from 'react-bootstrap-icons';
import Email from '../components/actions/email';

export const Contact = () => {
    return (
            <div className="border border-zinc-800 w-full max-w-[300px] h-full max-h-[300px] p-4 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center mb-6 text-white">Contact</h1>
                <div className="flex gap-9">
                    <Email />
                    <a href='https://br.linkedin.com/in/felipe-silveira-b9526b1b9'>
                        <Linkedin size={35} style={{ color: 'white'}} />
                    </a>
                    <a href='https://github.com/FelipeSlvr'>
                        <Github size={35} style={{ color: 'white'}} />
                    </a>
                </div>
            </div>
    );
}
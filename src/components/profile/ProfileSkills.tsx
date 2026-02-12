import { motion } from "framer-motion";
import { LANGUAGES, FRAMEWORKS, TOOLS } from "./ProfileData";

const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] },
    },
};

const listVariant = {
    visible: {
        transition: { staggerChildren: 0.04, delayChildren: 0.05 },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
};
  
export default function ProfileSkills() {
    return (
        <>
            <motion.div variants={sectionVariant} className="space-y-3">
                <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider">Languages</h3>
                <motion.ul
                    variants={listVariant}
                    className="flex flex-wrap gap-2 list-none p-0 m-0 justify-center md:justify-start"
                >
                    {LANGUAGES.map((skill) => (
                        <motion.li
                            key={skill}
                            variants={itemVariant}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-primary/90 text-sm"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
            <motion.div variants={sectionVariant} className="space-y-3">
                <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider">Frameworks</h3>
                <motion.ul
                    variants={listVariant}
                    className="flex flex-wrap gap-2 list-none p-0 m-0 justify-center md:justify-start"
                >
                    {FRAMEWORKS.map((skill) => (
                        <motion.li
                            key={skill}
                            variants={itemVariant}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-primary/90 text-sm"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
            <motion.div variants={sectionVariant} className="space-y-3">
                <h3 className="text-sm font-semibold text-primary/70 uppercase tracking-wider">Tools</h3>
                <motion.ul
                    variants={listVariant}
                    className="flex flex-wrap gap-2 list-none p-0 m-0 justify-center md:justify-start"
                >
                    {TOOLS.map((skill) => (
                        <motion.li
                            key={skill}
                            variants={itemVariant}
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-primary/90 text-sm"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </>
    );
}

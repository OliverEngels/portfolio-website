interface TextHanlderProps {
    text: string;
}

export const TextHandler: React.FC<TextHanlderProps> = ({ text }) => {
    const containsDelimiters = text.includes(`\\b`) || text.includes(`\\t`);

    if (containsDelimiters) {
        const sections = text.split(`\\b`).map(section => section.split(`\\t`));

        return (
            <>
                {sections.map((parts, index) => {
                    if (parts.length > 1) {
                        return (
                            <span key={`section-${index}`}>
                                <b>{parts[0]}</b>{parts.slice(1).join(`\\t`)}
                            </span>
                        );
                    } else {
                        return <span key={`section-${index}`}>{parts[0]}</span>;
                    }
                })}
            </>
        );
    } else {
        return <span>{text}</span>;
    }
};
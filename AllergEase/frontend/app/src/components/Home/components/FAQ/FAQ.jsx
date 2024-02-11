import "./faq.css";
import Faq from "react-faq-component";

const data = {
    title: "",
    rows: [
        {
            title: "How is my data handled?",
            content: "We do not collect any user data!",
        },
        {
            title: "How does the AI work?",
            content:"We use a combination of custom AI and GPT-4 to deliver the best-in-class results.",
        },
        {
            title: "Why StudyBoat?",
            content: "StudyBoat is the only product in its category that help students study, learn, and grow through personalized flashcards, helpful comments on essays, and intuitive guided notes to learn from.",
        },
        {
            title: "Who made StudyBoat?",
            content: "Rohit Kulkarni and Shlesh Sakpal are the developers of StudyBoat.",
        },
        {
            title: "I have more questions",
            content: "Please feel free to contact kulkarni.rohitva@gmail.com if you have any questions.",
        },
    ],
};

const styles = {
    bgColor: 'linear-gradient(white,#9cbcdf)',
    titleTextColor: "blue",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    arrowColor: "#9cbcdf",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAQ(){
    
    return (
        <div className="FAQs">
            <h2 className="title">FAQs</h2>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
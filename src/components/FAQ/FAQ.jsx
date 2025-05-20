import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./FAQ.module.css";

const faqItems = [
  {
    question: "What is Bookmark?",
    answer:
      "A bookmark lets you save your favorite sites for easy access later.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Maunis augue massa.ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes! We offer apps on both iOS and Android platforms.",
  },
  {
    question: "What about other Chromium browsers?",
    answer: "We support most Chromium-based browsers like Edge and Brave.",
  },
];

export default function FAQ() {
  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <p className={styles.faqSubtitle}>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <Accordion.Root type="single" collapsible className={styles.faqRoot}>
        {faqItems.map((item, i) => (
          <Accordion.Item
            value={`item-${i}`}
            className={styles.faqItem}
            key={i}
          >
            <Accordion.Header className={styles.faqHeader}>
              <Accordion.Trigger className={styles.faqTrigger}>
                {item.question}
                <ChevronDownIcon className={styles.faqChevron} />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.faqContent}>
              <p>{item.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <button className={styles.faqButton}>More Info</button>
    </div>
  );
}

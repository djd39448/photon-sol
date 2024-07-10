import Link from 'next/link';

const LinkButton = ({ linkname, title, title1, footer }) => {
  let fontSize = footer === "1" ? "14px" : "12px";
  let fontWeight = footer === "1" ? 400 : 500; // Adjust as needed

  return (
    <div
      style={{
        fontFamily: "Chillax-Variable",
        fontWeight: 'bold',
        fontSize: fontSize,
        color: "#b5b7da",
        lineHeight: "20px",
        position: "relative", // Necessary for pseudo-element positioning
        marginTop: '8px'
      }}
      className={`block mb-2 text-lg font-medium text-left text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light ${footer === "1" ? "" : "sm:mx-4 sm:py-2"}`}
      aria-label="Projects"
    >
      <Link href={linkname}>
        <span style={{ display: 'block' }}>
          {title}
        </span>
        {title1 && (
          <span style={{ display: 'block' }}>
            {title1}
          </span>
        )}
      </Link>
      <style jsx>{`
        span {
          color: #b5b7da; /* Default text color */
          transition: color 0.2s ease; /* Smooth transition for color change */
        }

        span:hover {
          color: #ffffff; /* White text color on hover */
        }

        div {
          position: relative;
          display: inline-block; /* Ensure the element is inline-block for the pseudo-element to align properly */
        }
      `}</style>
    </div>
  );
};

export default LinkButton;

import Link from "next/link";

const IndoorSeasonInfo = () => {
  return (
    <div className="component-container modified-container mt-10 p-4">
      <div className="h3-header text-2xl font-bold mb-2">
        Indoor Season 2024-25
      </div>
      <div className="">
        <p className="text-base">
          {" "}
          Saskatoon Adult and youth Soccer both have their indoor season
          starting around this October. For more information on each you can
          visit their respective websites at{" "}
          <a
            className="underline"
            href="https://www.saskatoonadultsoccer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            saskatoonadultsoccer.com
          </a>{" "}
          &{" "}
          <a
            className="underline"
            href="https://saskatoonyouthsoccer.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            saskatoonyouthsoccer.ca
          </a>
          . Matches will be played at the Saskatoon Soccer center 150 Nelson
          road and Henk Ruys center on 19 Primrose Dr. For more information on
          this fields check the links below.
        </p>
        <div className="h3-header text-2xl font-bold mt-4 mb-2">Locations</div>
        <div className="grid md:grid-cols-3 gap-4 min-h-48 w-4/5">
          <div className=" border  flex flex-col gap-2 p-3 drop-shadow">
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9792.772536462164!2d-106.5794135!3d52.1489973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f46bb8d4f86d%3A0xde2bdc0f81abfd53!2sSaskatoon%20Soccer%20Centre!5e0!3m2!1sen!2sca!4v1726303780661!5m2!1sen!2sca"
                // width="400"
                // height="300"

                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <Link
                className="font-bold"
                href={
                  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9788.745169832791!2d-106.6320023!3d52.1673063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f67fd834e74d%3A0xed263370a0287d5!2sSaskatoon%20Kinsmen%2FHenk%20Ruys%20Soccer%20Centre!5e0!3m2!1sen!2sca!4v1726301254398!5m2!1sen!2sca"
                }
              >
                Saskatoon Soccer Centre
              </Link>
            </div>
            <small>150 Nelson Rd, Saskatoon, SK S7S 1P5</small>
          </div>
          <div className=" border  flex flex-col gap-2 p-3 drop-shadow">
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9788.745169832791!2d-106.6320023!3d52.1673063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f67fd834e74d%3A0xed263370a0287d5!2sSaskatoon%20Kinsmen%2FHenk%20Ruys%20Soccer%20Centre!5e0!3m2!1sen!2sca!4v1726301254398!5m2!1sen!2sca"
                // width="400"
                // height="300"

                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <Link
                className="font-bold"
                href={
                  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9788.745169832791!2d-106.6320023!3d52.1673063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f67fd834e74d%3A0xed263370a0287d5!2sSaskatoon%20Kinsmen%2FHenk%20Ruys%20Soccer%20Centre!5e0!3m2!1sen!2sca!4v1726301254398!5m2!1sen!2sca"
                }
              >
                Saskatoon Kinsmen/Henk Ruys Soccer Centre
              </Link>
            </div>
            <small>219 Primrose Dr, Saskatoon, SK S7K 2J9</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndoorSeasonInfo;

import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Button from "../interactives/Button";
import { MoveRight } from "lucide-react";
import content, { abstractions } from "../../content/content";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function TeamMember(props) {
  const {
    img,
    alt,
    name,
    role,
    work,
    modal = false,
    modalContent,
    modalTitle,
  } = props;

  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className="flex flex-col items-center p-[10px] h-auto w-full tablet1:w-[45%] desktop1:w-[23%] bg-neutral-100 rounded-lg">
      <img alt={alt} src={img} className="  mb-[24px] bg-cover rounded-md" />
      <h1 className=" text-title1 leading-6 text-center font-bold">
        {name}
      </h1>
      <div className="desktop2:h-auto flex flex-col items-center justify-center ">
        <p className="mb-[16px] text-center text-paragraph2 text-black tablet1:w-90%]">
          {role}
        </p>
        <p className="text-center text-paragraph2 text-black tablet1:w-90%]">
          {work}
        </p>
        {modal && (
          <Button
            className=""
            size="small"
            label="Saiba mais"
            onClick={onClick}
            removeAnchor={true}
            removeTarget={true}
            animation={true}
            icon={<MoveRight />}
          />
        )}
      </div>

      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "700px" }}
        breakpoints={{ "1023px": "90vw" }}
      >
        <div className="text-paragraph3">{modalContent}</div>
      </Dialog>
    </div>
  );
}

import { Modal } from "@material-ui/core";
import React, { ReactElement } from "react";

export interface ProjectDetailModalProps {
  handleToggle: () => void;
  isOpen: boolean;
}

export default function ProjectDetailModal(
  props: ProjectDetailModalProps
): ReactElement | null {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleToggle}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <p> DSDfSDFSDFSDFSDFSDF</p>
    </Modal>
  );
}

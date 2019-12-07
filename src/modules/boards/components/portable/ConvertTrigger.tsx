import AddForm from 'modules/boards/containers/portable/AddForm';
import ModalTrigger from 'modules/common/components/ModalTrigger';
import React from 'react';
import { IOptions } from '../../types';

type Props = {
  relType: string;
  relTypeIds?: string[];
  assignedUserIds?: string[];
  options: IOptions;
  refetch: () => void;
  sourceIntegration?: string;
  sourceIntegrationId?: string;
  sourceConversationId?: string;
  title: string;
  url?: string;
};

export default (props: Props) => {
  const {
    relType,
    relTypeIds,
    options,
    refetch,
    assignedUserIds,
    sourceIntegration,
    sourceIntegrationId,
    sourceConversationId,
    title,
    url
  } = props;

  if (url) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={url}>
        {title}
      </a>
    );
  }

  const trigger = <a href="#title">{title}</a>;

  const content = formProps => (
    <AddForm
      options={options}
      {...formProps}
      refetch={refetch}
      relType={relType}
      relTypeIds={relTypeIds}
      assignedUserIds={assignedUserIds}
      sourceIntegration={sourceIntegration}
      sourceIntegrationId={sourceIntegrationId}
      sourceConversationId={sourceConversationId}
      showSelect={true}
    />
  );

  return <ModalTrigger title={title} trigger={trigger} content={content} />;
};

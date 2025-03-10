import React, { useEffect, useState } from 'react';
import Modal from '../../../../components/Modal';
import ProviderSetupHeader from './subcomponents/ProviderSetupHeader';
import DefaultProviderSetupForm from './subcomponents/forms/DefaultProviderSetupForm';
import ProviderSetupActions from './subcomponents/ProviderSetupActions';
import ProviderLogo from './subcomponents/ProviderLogo';
import { useProviderModal } from './ProviderModalProvider';
import { SecureStorageNotice } from './subcomponents/SecureStorageNotice';
import { DefaultSubmitHandler } from './subcomponents/handlers/DefaultSubmitHandler';
import OllamaSubmitHandler from './subcomponents/handlers/OllamaSubmitHandler';
import OllamaForm from './subcomponents/forms/OllamaForm';
import { useConfig } from '../../../ConfigContext';

const customSubmitHandlerMap = {
  provider_name: OllamaSubmitHandler, // example
};

const customFormsMap = {
  provider_name: OllamaForm, // example
};

export default function ProviderConfigurationModal() {
  const { upsert } = useConfig();
  const { isOpen, currentProvider, modalProps, closeModal } = useProviderModal();
  const [configValues, setConfigValues] = useState({});

  if (!isOpen || !currentProvider) return null;

  const headerText = `Configure ${currentProvider.metadata.display_name}`;
  const descriptionText = `Add your API key(s) for this provider to integrate into Goose`;

  const SubmitHandler = customSubmitHandlerMap[currentProvider.name] || DefaultSubmitHandler;
  const FormComponent = customFormsMap[currentProvider.name] || DefaultProviderSetupForm;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('Form submitted for:', currentProvider.name);

    SubmitHandler(upsert, currentProvider, configValues);

    // Close the modal unless the custom handler explicitly returns false
    // This gives custom handlers the ability to keep the modal open if needed
    closeModal();
  };

  const handleCancel = () => {
    // Use custom cancel handler if provided
    if (modalProps.onCancel) {
      modalProps.onCancel();
    }

    closeModal();
  };

  return (
    <Modal>
      <div className="space-y-1">
        {/* Logo area - centered above title */}
        <ProviderLogo providerName={currentProvider.name} />
        {/* Title and some information - centered */}
        <ProviderSetupHeader title={headerText} body={descriptionText} />
      </div>

      {/* Contains information used to set up each provider */}
      <FormComponent
        configValues={configValues}
        setConfigValues={setConfigValues}
        provider={currentProvider}
        {...(modalProps.formProps || {})} // Spread any custom form props
      />

      {currentProvider.metadata.config_keys && currentProvider.metadata.config_keys.length > 0 && (
        <SecureStorageNotice />
      )}
      <ProviderSetupActions onCancel={handleCancel} onSubmit={handleSubmitForm} />
    </Modal>
  );
}

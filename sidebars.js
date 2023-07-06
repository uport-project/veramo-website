/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Basics',
      items: ['basics/introduction', 'basics/verifiable_data', 'basics/identifiers', 'basics/signing_keys'],
    },
    {
      type: 'category',
      label: 'Veramo Agent',
      items: [
        'veramo_agent/introduction',
        'veramo_agent/plugins',
        // 'veramo_agent/configuration',
        'veramo_agent/did_methods',
        'veramo_agent/messages',
        'veramo_agent/message_handlers',
        'veramo_agent/sdr_request',
        // 'veramo_agent/key_management',
        'veramo_agent/event_system',
        'veramo_agent/cli_tool',
        'veramo_agent/configuration_internals',
        'veramo_agent/versioning',
      ],
    },
    {
      type: 'category',
      label: 'Development Tools',
      items: [
        'dev_tools/veramo_cli',
        'dev_tools/veramo_react',
        'dev_tools/agent_explorer',
        // 'dev_tools/ssi_toolkit',
        // 'dev_tools/nft_toolkit',
        // 'dev_tools/web3_toolkit',
      ],
    },
    {
      type: 'category',
      label: 'Node Tutorials',
      items: ['node_tutorials/node_setup_identifiers'],
    },
    {
      type: 'category',
      label: 'React Tutorials',
      items: ['react_tutorials/react_setup_resolver'],
    },
    {
      type: 'category',
      label: 'React Native Tutorials',
      items: [
        'react_native_tutorials/react_native_1_setup_identifiers',
        'react_native_tutorials/react_native_2_resolve_dids',
        'react_native_tutorials/react_native_3_create_credentials',
        'react_native_tutorials/react_native_4_verify_credentials',
        'react_native_tutorials/react_native_5_update_did_document',
      ],
    },
    {
      type: 'category',
      label: 'CLI Tutorials',
      items: [
        'cli_tutorials/cli_create_vc',
        'cli_tutorials/cli_manage_gh_pages_did_web',
        // 'cli_tutorials/cli_selective_disclosure'
      ],
    },
    {
      type: 'category',
      label: 'Deployment Tutorials',
      items: [
        'deployment_tutorials/deployment_aws',
        // 'deployment_tutorials/deployment_heroku',
        // 'deployment_tutorials/deployment_azure',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/open_source_community',
        'community/contributing',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Resources',
    //   items: ['resources/resource_1', 'resources/resource_2', 'resources/resource_3'],
    // },
  ],
}

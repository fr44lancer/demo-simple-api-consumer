// components/docs/InstallDocsSection.tsx
'use client';

import {Tabs, Typography} from 'antd';

const {Title, Paragraph} = Typography;

const items = [
    {
        key: 'usage',
        label: 'How to Use the App',
        children: (
            <div className={'p-4'}>


                <Paragraph>
                    <strong>API Consumer:</strong>{'  '}
                    Navigate to the <code>/consumer</code> page to consume api data.
                </Paragraph>

                <Paragraph>
                    <strong>4. Public Endpoints:</strong><br/>
                    - <code>/api/v1/get-person-by-psn?psn=XXXX</code> — search person by PSN<br/>
                    - <code>/api/v1/persons</code> — list persons<br/>
                    - <code>/api/v1/addresses</code> — list addresses
                </Paragraph>

            </div>
        ),
    },
    {
        key: 'install',
        label: 'Installation (GitHub)',
        children: (
            <Paragraph className={'p-4'}>
                Please refer to the full installation guide in the
                {' '}<a href="https://github.com/fr44lancer/demo-simple-api-consumer" target="_blank"
                        className="text-blue-600 underline">README on GitHub</a>.
            </Paragraph>
        ),
    }
];

export default function HowToUse() {
    return (
        <div className="mt-10 p-4 bg-white">
            <Title level={3}>How to Use the App</Title>
            <Tabs defaultActiveKey="overview" items={items} className="bg-white rounded  p-10"/>
        </div>
    );
}

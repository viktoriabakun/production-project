import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    useEffect(() => {
        throw new Error('haha you failed');
    }, []);

    return (
        <div>
            {t('About page')}
            {' '}
            :)
        </div>
    );
};

export default AboutPage;

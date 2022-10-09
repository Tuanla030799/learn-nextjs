import * as React from 'react';
import { AdminLayout } from '../../components/layout';

export interface IAboutPageProps {
}

export default function AboutPage (props: IAboutPageProps) {
  return (
    <AdminLayout>
      <h1>About</h1>
    </AdminLayout>
  );
}
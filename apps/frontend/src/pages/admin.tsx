import { GeneralLayout } from '@/components';

export default function AdminPage() {
  return (
    <GeneralLayout>
      <h1>This page is protected by Middleware</h1>
      <p>Only admin users can see this page.</p>
      <p>
        To learn more about the NextAuth middleware see&nbsp;
        <a href="https://next-auth.js.org/configuration/nextjs#middleware">the docs</a>.
      </p>
    </GeneralLayout>
  );
}

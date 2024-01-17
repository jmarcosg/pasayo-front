import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DemoAccordion from './DemoAccordion';
import DemoAlertDialog from './DemoAlertDialog';
import DemoAvatar from './DemoAvatar';
import DemoButton from './DemoButton';
import DemoDialog from './DemoDialog';
import DemoScrollArea from './DemoScrollArea';
import DemoSheet from './DemoSheet';

const Dashboard = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Dashboard</PageHeaderHeading>
      </PageHeader>
      <Card>
        <CardHeader>
          <CardTitle>React Shadcn Starter</CardTitle>
          <CardDescription>React + Vite + TypeScript template for building apps with shadcn/ui.</CardDescription>
        </CardHeader>
      </Card>

      <div className='mt-2'>
        <Card>
          <CardHeader>
            <CardTitle>Demo Components</CardTitle>
            <CardDescription>Custom components built for demo</CardDescription>
            <CardContent>
              <DemoAccordion />
              <DemoAlertDialog />
              <DemoAvatar />
              <DemoButton />
              <DemoDialog />
              <DemoScrollArea />
              <DemoSheet />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;

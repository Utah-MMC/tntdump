import { notFound, redirect } from 'next/navigation';

interface RouteParams {
  params: {
    slug: string;
    subslug: string;
  };
}

export default function NestedSlugRedirect({ params }: RouteParams) {
  if (params.slug === params.subslug) {
    redirect(`/${params.slug}`);
  }

  notFound();
}

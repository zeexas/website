import Header from '../components/Header';

function ErrorPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 items-center justify-center text-center text-3xl font-bold">
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;

import Head from "next/head";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import Heading from "@/components/Heading";

import ProductForm from "@/components/forms/ProductForm";
import { useUpdate } from "@/lib/tq/products/mutations";

import { fetchProduct } from "@/lib/api-functions/server/products/queries";

export default function UpdateProduct({ ssd }) {
  const router = useRouter();
  const updateMutation = useUpdate();

  const submitHandler = (data) => {
    updateMutation.mutate(data);
    router.push("/admin/products/");
  };
  return (
    <>
      <Head>
        <title>Admin Update Product</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <pre>{JSON.stringify(ssd, null, 2)}</pre>
        <Heading component="h1">Edit Product</Heading>
        <ProductForm product={ssd} submitHandler={submitHandler} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params }, any) => {
  const product = await fetchProduct(params.id).catch((err) =>
    console.log(err)
  );
  console.log("product", product);
  return { props: { ssd: JSON.parse(JSON.stringify(product)) } };
}
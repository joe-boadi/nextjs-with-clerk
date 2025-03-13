import React from "react";

export default async function Products({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>Products page: {id}</div>;
}

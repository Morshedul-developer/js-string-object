const mobile = {
  brand: "samsung",
  color: "black",
  price: 80000,
  isNew: true,
};

for (const prop in mobile) {
    console.log(prop, ':', mobile[prop]);
}

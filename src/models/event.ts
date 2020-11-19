export class Event {
  address: string;
  city: string;
  company_name: string;
  date: string;
  description: string;
  duration: string;
  label: string;
  picture1: string;
  picture2: string;
  picture3: string;
  price: string;
  title: string;
  type: string;
  zipcode: string;

  constructor(
    address: string,
    city: string,
    company_name: string,
    date: string,
    description: string,
    duration: string,
    label: string,
    picture1: string,
    picture2: string,
    picture3: string,
    price: string,
    title: string,
    type: string,
    zipcode: string,
  ) {
    (this.address = address),
      (this.city = city),
      (this.company_name = company_name),
      (this.date = date),
      (this.description = description),
      (this.duration = duration),
      (this.label = label),
      (this.picture1 = picture1),
      (this.picture2 = picture2),
      (this.picture3 = picture3),
      (this.price = price),
      (this.title = title),
      (this.type = type),
      (this.zipcode = zipcode);
  }
}

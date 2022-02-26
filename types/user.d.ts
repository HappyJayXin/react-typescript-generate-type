interface User {
  user_id: string;
  email: string;
  given_name: string;
  family_name: string;
  groups: Group[];
  details: Details;
}
interface Details {
  phone_number: string;
  preferred_language: string;
}
interface Group {
  name: string;
}

import { IGNORE } from '@global/constant/ignore';
import { PACKAGE_NAME } from '@global/constant/package_name';

const fileIgnore = (userIgnore: string[] | undefined) => {
  return {
    name: `${PACKAGE_NAME}/ignore`,
    ignores: [...IGNORE, ...userIgnore ?? []]
  };
};

export { fileIgnore };
#set( $nameInKebabCase = $NAME.replaceAll("([a-z])([A-Z]+)", "$1-$2").toLowerCase() )
import { ${NAME} } from "./${nameInKebabCase}";
import { getInjectable, lifecycleEnum } from "@ogre-tools/injectable";  

const ${NAME}Injectable = getInjectable({
  instantiate: (di) => ${NAME}({ 
    #[[$dependency$]]#: di.inject(#[[$dependency$$END$]]#Injectable),
  }),
  
  lifecycle: lifecycleEnum.singleton,
});

export default ${NAME}Injectable;
# Pasos para levantar el proyecto

1. Tener instalado docker
2. Tener instalado kubernetes
3. Añadir en los hosts ticketing.dev
3. Aplicar el balanceador de carga
     ``kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.40.1/deploy/static/provider/cloud/deploy.yaml``
4. Crear los secretos de jwt y de stripe (tiene que ser el secret key que se tiene guardado en la página)
    secret_key = sk_test_51KGXc4FmZdzBdnqbzQJk0fVrxXO5Cs7Pl0z4egpTByT71bXU3InjpPNJRycYv4IKdvYL2y5NN5ZKkfNiye2WFhR0001mbFOS76
    ``kubectl create secret generic jwt-secret --from-literal=JWT_KEY=valor_secret``
    ``kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=valor_secret``
5. Instalar skaffold (teniendo chocolatey instalado)
    ``choco install -y skaffold``
6. Correr skaffold y para skaffold
    ``skaffold dev``
    ``skaffold delete``

7. Test de la tarjeta de pago
   4242 4242 4242 4242
   10/30          123

## Notas : 

-> Si se desea ejecutar la petición de autenticación desde postman, tiene que ser mandada como https ya que genera la cookie cuando la petición es segura y no por método http

-> El modulo de autenticación está esparcido por toda la aplicación el cual cada microservicio recibe el jwt_token y así cada uno es independiente para verificar la autorización

-> Cuando es necesario crear clases sobre el error default de javascript, se añade dentro del constructor Object.setPrototypeOf(this, FooError.prototype);

-> Hay procesos de colas como listeners que no tienen necesidad de correr bajo un puerto de express y solo se ejecuta la función como tal Ej: El microservicio de "expiration" no corre bajo ningun puerto

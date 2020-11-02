from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import TransactionSerializer
from ..models import Transaction


@api_view(['GET', 'POST'])
def transaction_list(request):

    if request.method == 'GET':
        transactions = Transaction.objects.all()
        serializer = TransactionSerializer(transactions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_transaction(request, id):
    try:
        transaction = Transaction.objects.get(id=id)
        serializer = TransactionSerializer(transaction)
    except Transaction.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(serializer.data)

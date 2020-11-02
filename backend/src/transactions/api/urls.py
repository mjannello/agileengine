from django.urls import path

from ..api.views import transaction_list, get_transaction
# from .views import (
#     TransactionListView,
#     TransactionDetailView,
#     TransactionCreateView
# )

urlpatterns = [
    path('', transaction_list),
    path('<id>', get_transaction),
    # path('create/', TransactionCreateView.as_view()),
    # path('<pk>', TransactionDetailView.as_view()),
]